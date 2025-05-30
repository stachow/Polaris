import { GET_DOCUMENTS_LIST_ROUTE } from "../../src/mock-api/routes";
import { getRefreshedDocumentsForNotification } from "../../src/mock-api/data/getDocumentsList.cypress";

describe("notifications", () => {
  xit("Should show notifications when a document get updated, when a new documents gets added,a new version is available or a document is discarded and should be able to clear each of the notification by clicking on the clear button", () => {
    const documentList = getRefreshedDocumentsForNotification();
    cy.overrideRoute(GET_DOCUMENTS_LIST_ROUTE, {
      body: documentList[0],
      timeMs: 1000,
    });
    cy.visit("/case-details/12AB1111111/13401?notifications=true");

    cy.findByTestId("btn-accordion-open-close-all").click();
    cy.findByTestId("notifications_btn").should("exist");
    cy.findByTestId("notifications_count").should("have.text", "0");
    cy.findByTestId("notifications-panel").should("not.exist");
    cy.findByTestId("link-document-1").click();
    cy.findByTestId("div-pdfviewer-0")
      .should("exist")
      .contains("REPORT TO CROWN PROSECUTOR FOR CHARGING DECISION,");
    cy.selectPDFTextElement("WEST YORKSHIRE POLICE");
    cy.findByTestId("btn-redact").should("have.length", 1);
    cy.findByTestId("btn-redact").should("be.disabled");
    cy.focused().should("have.id", "select-redaction-type");
    cy.findByTestId("select-redaction-type").select("2");
    cy.findByTestId("btn-redact").click({ force: true });
    cy.overrideRoute(GET_DOCUMENTS_LIST_ROUTE, {
      body: documentList[1],
      timeMs: 1000,
    });
    //we are triggering a document refresh to get the updated documents by doing the redaction.
    cy.findByTestId("btn-save-redaction-0").click();
    cy.findByTestId("div-modal").should("be.visible");
    cy.findByTestId("rl-under-redaction-content").should("be.visible");
    cy.findByTestId("btn-save-redaction-log").click();
    cy.findByTestId("pdfTab-spinner-0").should("exist");
    cy.findByTestId("div-pdfviewer-0").should("not.exist");
    cy.findByTestId("pdfTab-spinner-0").should("not.exist");
    cy.findByTestId("div-pdfviewer-0").should("exist");

    cy.findByTestId("notifications_count").should("have.text", "4");
    cy.findByTestId("notifications-panel").should("not.exist");
    cy.findByTestId("notifications_btn").click();
    cy.findByTestId("notifications-panel").should("exist");
    cy.findByTestId("clear-all-notifications-btn").should("exist");
    cy.findByTestId("notifications-panel")
      .find("ul")
      .should("have.length", 1)
      .find("li")
      .should("have.length", 4);
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(0)
      .should("contain.text", "Discarded")
      .should("contain.text", "PCD Document")
      .should("contain.text", "Reviews")
      .find("button")
      .should("have.length", 1)
      .then((buttons) => {
        expect(buttons.eq(0)).to.have.text("Clear");
      });
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(1)
      .should("contain.text", "New")
      .should("contain.text", "Court preparation")
      .find("button")
      .should("have.length", 2)
      .then((buttons) => {
        expect(buttons.eq(0)).to.have.text("New Document_1");
        expect(buttons.eq(1)).to.have.text("Clear");
      });
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(2)
      .should("contain.text", "Updated")
      .should("contain.text", "Exhibits")
      .find("button")
      .should("have.length", 2)
      .then((buttons) => {
        expect(buttons.eq(0)).to.have.text("CM01_1");
        expect(buttons.eq(1)).to.have.text("Clear");
      });
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(3)
      .should("contain.text", "New Version")
      .should("contain.text", "Court preparation")
      .find("button")
      .should("have.length", 2)
      .then((buttons) => {
        expect(buttons.eq(0)).to.have.text("Doc_3");
        expect(buttons.eq(1)).to.have.text("Clear");
      });
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(0)
      .should("contain.text", "PCD Document")
      .find("button")
      .contains("Clear")
      .click();
    cy.findByTestId("notifications_count").should("have.text", "3");
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(0)
      .should("contain.text", "New Document_1")
      .find("button")
      .contains("Clear")
      .click();
    cy.findByTestId("notifications_count").should("have.text", "2");
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(0)
      .should("contain.text", "CM01_1")
      .find("button")
      .contains("Clear")
      .click();
    cy.findByTestId("notifications_count").should("have.text", "1");
    cy.get("div")
      .find("ul")
      .find("li")
      .eq(0)
      .should("contain.text", "Doc_3")
      .find("button")
      .contains("Clear")
      .click();
    cy.findByTestId("notifications_count").should("have.text", "0");
    cy.findByTestId("notifications-panel").should("not.exist");
  });

  xit("Should show notifications and clear all notification button click should clear the notifications", () => {
    const documentList = getRefreshedDocumentsForNotification();
    cy.overrideRoute(GET_DOCUMENTS_LIST_ROUTE, {
      body: documentList[0],
      timeMs: 1000,
    });
    cy.visit("/case-details/12AB1111111/13401?notifications=true");

    cy.findByTestId("btn-accordion-open-close-all").click();
    cy.findByTestId("notifications_btn").should("exist");
    cy.findByTestId("notifications_count").should("have.text", "0");
    cy.findByTestId("notifications-panel").should("not.exist");
    cy.findByTestId("link-document-1").click();
    cy.findByTestId("div-pdfviewer-0")
      .should("exist")
      .contains("REPORT TO CROWN PROSECUTOR FOR CHARGING DECISION,");
    cy.selectPDFTextElement("WEST YORKSHIRE POLICE");
    cy.findByTestId("btn-redact").should("have.length", 1);
    cy.findByTestId("btn-redact").should("be.disabled");
    cy.focused().should("have.id", "select-redaction-type");
    cy.findByTestId("select-redaction-type").select("2");
    cy.findByTestId("btn-redact").click({ force: true });
    cy.overrideRoute(GET_DOCUMENTS_LIST_ROUTE, {
      body: documentList[1],
      timeMs: 1000,
    });
    //we are triggering a document refresh to get the updated documents by doing the redaction.
    cy.findByTestId("btn-save-redaction-0").click();
    cy.findByTestId("div-modal").should("be.visible");
    cy.findByTestId("rl-under-redaction-content").should("be.visible");
    cy.findByTestId("btn-save-redaction-log").click();
    cy.findByTestId("pdfTab-spinner-0").should("exist");
    cy.findByTestId("div-pdfviewer-0").should("not.exist");
    cy.findByTestId("pdfTab-spinner-0").should("not.exist");
    cy.findByTestId("div-pdfviewer-0").should("exist");

    cy.findByTestId("notifications_count").should("have.text", "4");
    cy.findByTestId("notifications-panel").should("not.exist");
    cy.findByTestId("notifications_btn").click();
    cy.findByTestId("notifications-panel").should("exist");
    cy.findByTestId("clear-all-notifications-btn").should("exist");
    cy.findByTestId("notifications-panel")
      .find("ul")
      .should("have.length", 1)
      .find("li")
      .should("have.length", 4);
    cy.findByTestId("clear-all-notifications-btn").click();
    cy.findByTestId("notifications_count").should("have.text", "0");
    cy.findByTestId("notifications-panel").should("not.exist");
  });
  xit("Should be able to open the document and notification related to that document should be cleared", () => {
    const documentList = getRefreshedDocumentsForNotification();
    cy.overrideRoute(GET_DOCUMENTS_LIST_ROUTE, {
      body: documentList[0],
      timeMs: 1000,
    });
    cy.visit("/case-details/12AB1111111/13401?notifications=true");

    cy.findByTestId("btn-accordion-open-close-all").click();
    cy.findByTestId("notifications_btn").should("exist");
    cy.findByTestId("notifications_count").should("have.text", "0");
    cy.findByTestId("notifications-panel").should("not.exist");
    cy.findByTestId("link-document-1").click();
    cy.findByTestId("div-pdfviewer-0")
      .should("exist")
      .contains("REPORT TO CROWN PROSECUTOR FOR CHARGING DECISION,");
    cy.selectPDFTextElement("WEST YORKSHIRE POLICE");
    cy.findByTestId("btn-redact").should("have.length", 1);
    cy.findByTestId("btn-redact").should("be.disabled");
    cy.focused().should("have.id", "select-redaction-type");
    cy.findByTestId("select-redaction-type").select("2");
    cy.findByTestId("btn-redact").click({ force: true });
    cy.overrideRoute(GET_DOCUMENTS_LIST_ROUTE, {
      body: documentList[1],
      timeMs: 1000,
    });
    //we are triggering a document refresh to get the updated documents by doing the redaction.
    cy.findByTestId("btn-save-redaction-0").click();
    cy.findByTestId("div-modal").should("be.visible");
    cy.findByTestId("rl-under-redaction-content").should("be.visible");
    cy.findByTestId("btn-save-redaction-log").click();
    cy.findByTestId("pdfTab-spinner-0").should("exist");
    cy.findByTestId("div-pdfviewer-0").should("not.exist");
    cy.findByTestId("pdfTab-spinner-0").should("not.exist");
    cy.findByTestId("div-pdfviewer-0").should("exist");

    cy.findByTestId("notifications_count").should("have.text", "4");
    cy.findByTestId("notifications-panel").should("not.exist");
    cy.findByTestId("notifications_btn").click();
    cy.findByTestId("notifications-panel").should("exist");
    cy.findByTestId("clear-all-notifications-btn").should("exist");
    cy.findByTestId("notifications-panel")
      .find("ul")
      .should("have.length", 1)
      .find("li")
      .should("have.length", 4);
    cy.findByTestId("notifications-panel")
      .find("ul")
      .should("have.length", 1)
      .find("li")
      .eq(2)
      .find("button")
      .contains("CM01_1")
      .click({ force: true });
    cy.findByTestId("tab-active").should("have.text", "CM01_1");
    cy.findByTestId("notifications_count").should("have.text", "3");
    cy.findByTestId("notifications-panel").should("not.exist");
  });
});
