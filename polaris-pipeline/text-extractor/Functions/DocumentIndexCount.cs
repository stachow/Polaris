using Common.Configuration;
using Common.Extensions;
using Common.Handlers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using text_extractor.Services.CaseSearchService;

namespace text_extractor.Functions
{
    public class DocumentIndexCount : BaseFunction
    {
        private readonly ILogger<DocumentIndexCount> _log;
        private readonly ISearchIndexService _searchIndexService;
        private readonly IExceptionHandler _exceptionHandler;
        private const string LoggingName = nameof(DocumentIndexCount);

        public DocumentIndexCount(
            ILogger<DocumentIndexCount> log,
            ISearchIndexService searchIndexService,
            IExceptionHandler exceptionHandler)
        {
            _log = log ?? throw new ArgumentNullException(nameof(log));
            _searchIndexService = searchIndexService ?? throw new ArgumentNullException(nameof(searchIndexService));
            _exceptionHandler = exceptionHandler ?? throw new ArgumentNullException(nameof(exceptionHandler));
        }

        [Function(nameof(DocumentIndexCount))]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = RestApi.DocumentIndexCount)] HttpRequest request, int caseId, string documentId, long versionId)
        {
            var correlationId = Guid.Empty;

            try
            {
                correlationId = request.Headers.GetCorrelationId();

                var result = await _searchIndexService.GetDocumentIndexCount(caseId, documentId, versionId, correlationId);

                return CreateJsonResult(result);
            }
            catch (Exception exception)
            {
                return _exceptionHandler.HandleExceptionNew(exception, correlationId, LoggingName, _log);
            }
        }
    }
}