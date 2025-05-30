import {
  SectionBreak,
  Select,
} from "../../../../../../common/presentation/components";
import { CombinedState } from "../../../../domain/CombinedState";
import { MappedTextSearchResult } from "../../../../domain/MappedTextSearchResult";
import { CaseDetailsState } from "../../../../hooks/use-case-details-state/useCaseDetailsState";
import { MissingDocs } from "./MissingDocs";
import classes from "./Header.module.scss";

type ResultsOrder =
  CombinedState["searchState"]["searchConfigs"]["documentContent"]["resultsOrder"];

type Props = {
  submittedSearchTerm: string;
  requestedSearchTerm: string;
  searchResult: MappedTextSearchResult;
  missingDocs: CombinedState["searchState"]["missingDocs"];
  resultsOrder: ResultsOrder;
  previouslyIndexed: boolean;
  handleChangeResultsOrder: CaseDetailsState["handleChangeResultsOrder"];
};

export const Header: React.FC<Props> = ({
  searchResult: { filteredDocumentCount, filteredOccurrencesCount },
  missingDocs,
  submittedSearchTerm,
  requestedSearchTerm,
  previouslyIndexed,
  handleChangeResultsOrder,
  resultsOrder,
}) => {
  const isMissingDocsMode = !!missingDocs.length;

  const items: {
    children: string;
    value: ResultsOrder;
  }[] = [
    {
      children: "Date added",
      value: "byDateDesc" as const,
    },
    {
      children: "Results per document",
      value: "byOccurancesPerDocumentDesc" as const,
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <div
          className={classes.textSection}
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            data-testid="div-results-header"
            className={classes.resultsHeader}
          >
            {submittedSearchTerm !== requestedSearchTerm ? (
              <div
                className={classes.singleWordSearchWarning}
                data-testid="div-sanitized-search"
              >
                The service currently recognises only the first term entered in
                to the search box. The results shown below are matches found for
                '{submittedSearchTerm}'.
              </div>
            ) : null}

            {!!filteredDocumentCount ? (
              <>
                {" "}
                <b>{filteredOccurrencesCount}</b> results in{" "}
                <b>{filteredDocumentCount}</b>{" "}
                {`document${filteredDocumentCount ? "s" : ""} `}
              </>
            ) : (
              <>No documents found matching '{submittedSearchTerm}'</>
            )}
          </div>
          {isMissingDocsMode && previouslyIndexed && (
            <div>
              Search may not have found all instances of '{submittedSearchTerm}'
              in this case
            </div>
          )}
        </div>
        {!!filteredDocumentCount && (
          <Select
            label={{
              htmlFor: "select-result-order",
              children: "Sort by",
              className: classes.sortLabel,
            }}
            id="select-result-order"
            data-testid="select-result-order"
            value={resultsOrder}
            items={items}
            formGroup={{
              className: classes.select,
            }}
            onChange={(ev) =>
              handleChangeResultsOrder(ev.target.value as ResultsOrder)
            }
          />
        )}
      </div>

      {previouslyIndexed && (
        <>
          <SectionBreak noTopMargin />

          {isMissingDocsMode && (
            <>
              <MissingDocs missingDocs={missingDocs} />
              <SectionBreak />
            </>
          )}
        </>
      )}
    </>
  );
};
