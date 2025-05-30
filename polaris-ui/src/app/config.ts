export const GATEWAY_BASE_URL = process.env.REACT_APP_GATEWAY_BASE_URL!;
export const GATEWAY_SCOPE = process.env.REACT_APP_GATEWAY_SCOPE!;
export const REDACTION_LOG_SCOPE = process.env.REACT_APP_REDACTION_LOG_SCOPE!;

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID!;
export const TENANT_ID = process.env.REACT_APP_TENANT_ID!;
export const BUILD_NUMBER = process.env.REACT_APP_BUILD_NUMBER || "development";
export const SURVEY_LINK = process.env.REACT_APP_SURVEY_LINK;
export const REDACTION_LOG_BASE_URL =
  process.env.REACT_APP_REDACTION_LOG_BASE_URL;

/*
  To avoid public routing, we send out app insights traffic through on our own domain via the proxy.
  In a given environment the application is accessed via different domain names depending on whether
  we are on the VPN or a CPS device etc.  That means we need to specify IngestionEndpoint
  and LiveEndpoint dynamically based on the current domain.
*/
export const AI_CONNECTION_STRING =
  `InstrumentationKey=${process.env.REACT_APP_AI_KEY};` +
  `IngestionEndpoint=${window.location.origin};` +
  `LiveEndpoint=${window.location.origin}`;

export const REPORT_ISSUE = process.env.REACT_APP_REPORT_ISSUE === "true";
export const PIPELINE_POLLING_DELAY = Number(
  process.env.REACT_APP_PIPELINE_POLLING_DELAY || 2000
);

export const API_LOCAL_POLLING_DELAY_MS = Number(
  process.env.REACT_APP_API_LOCAL_POLLING_DELAY_MS || 2500
);

export const API_LOCAL_POLLING_RETRY_COUNT = Number(
  process.env.REACT_APP_API_LOCAL_POLLING_RETRY_COUNT || 10
);

export const REAUTH_REDIRECT_URL_OUTBOUND =
  process.env.REACT_APP_REAUTH_REDIRECT_URL_OUTBOUND!;

export const REAUTH_REDIRECT_URL_OUTBOUND_E2E =
  process.env.REACT_APP_REAUTH_REDIRECT_URL_OUTBOUND_E2E!;

export const REAUTH_REDIRECT_URL_INBOUND =
  process.env.REACT_APP_REAUTH_REDIRECT_URL_INBOUND!;

export const REAUTH_USE_IN_SITU_REFRESH =
  process.env.REACT_APP_REAUTH_USE_IN_SITU_REFRESH === "true";

export const REAUTH_IN_SITU_TERMINATION_URL =
  process.env.REACT_APP_REAUTH_IN_SITU_TERMINATION_URL!;

export const PRIVATE_BETA_USER_GROUP =
  process.env.REACT_APP_PRIVATE_BETA_USER_GROUP!;

export const PRIVATE_BETA_SIGN_UP_URL =
  process.env.REACT_APP_PRIVATE_BETA_SIGN_UP_URL!;

export const PRIVATE_BETA_CHECK_IGNORE_USER =
  process.env.REACT_APP_PRIVATE_BETA_CHECK_IGNORE_USER;

export const IS_REDACTION_SERVICE_OFFLINE =
  process.env.REACT_APP_IS_REDACTION_SERVICE_OFFLINE;

export const FEATURE_FLAG_HTE_EMAILS_ON =
  process.env.REACT_APP_FEATURE_FLAG_HTE_EMAILS_ON === "true";

export const FEATURE_FLAG_REDACTION_LOG =
  `${process.env.REACT_APP_FEATURE_FLAG_REDACTION_LOG}` === "true";

export const FEATURE_FLAG_REDACTION_LOG_UNDER_OVER =
  `${process.env.REACT_APP_FEATURE_FLAG_REDACTION_LOG_UNDER_OVER}` === "true";

export const FEATURE_FLAG_FULL_SCREEN =
  `${process.env.REACT_APP_FEATURE_FLAG_FULL_SCREEN}` === "true";

export const FEATURE_FLAG_NOTES =
  `${process.env.REACT_APP_FEATURE_FLAG_NOTES}` === "true";

export const FEATURE_FLAG_SEARCH_PII =
  `${process.env.REACT_APP_FEATURE_FLAG_SEARCH_PII}` === "true";

export const FEATURE_FLAG_RENAME_DOCUMENT =
  `${process.env.REACT_APP_FEATURE_FLAG_RENAME_DOCUMENT}` === "true";

export const FEATURE_FLAG_RECLASSIFY =
  `${process.env.REACT_APP_FEATURE_FLAG_RECLASSIFY}` === "true";

export const FEATURE_FLAG_PAGE_DELETE =
  `${process.env.REACT_APP_FEATURE_FLAG_PAGE_DELETE}` === "true";

export const FEATURE_FLAG_PAGE_ROTATE =
  `${process.env.REACT_APP_FEATURE_FLAG_PAGE_ROTATE}` === "true";

export const FEATURE_FLAG_STATE_RETENTION =
  `${process.env.REACT_APP_FEATURE_FLAG_STATE_RETENTION}` === "true";

export const FEATURE_FLAG_GLOBAL_NAV =
  `${process.env.REACT_APP_FEATURE_FLAG_GLOBAL_NAV}` === "true";

export const FEATURE_FLAG_EXTERNAL_REDIRECT_CASE_REVIEW_APP =
  `${process.env.REACT_APP_FEATURE_FLAG_EXTERNAL_REDIRECT_CASE_REVIEW_APP}` ===
  "true";

export const FEATURE_FLAG_EXTERNAL_REDIRECT_BULK_UM_APP =
  `${process.env.REACT_APP_FEATURE_FLAG_EXTERNAL_REDIRECT_BULK_UM_APP}` ===
  "true";

export const FEATURE_FLAG_BACKGROUND_PIPELINE_REFRESH =
  `${process.env.REACT_APP_FEATURE_FLAG_BACKGROUND_PIPELINE_REFRESH}` ===
  "true";

export const FEATURE_FLAG_REDACTION_TOGGLE_COPY_BUTTON =
  `${process.env.REACT_APP_FEATURE_FLAG_REDACTION_TOGGLE_COPY_BUTTON}` ===
  "true";

export const FEATURE_FLAG_DOCUMENT_NAME_SEARCH =
  `${process.env.REACT_APP_FEATURE_FLAG_DOCUMENT_NAME_SEARCH}` === "true";

export const BACKGROUND_PIPELINE_REFRESH_INTERVAL_MS = parseInt(
  process.env.REACT_APP_BACKGROUND_PIPELINE_REFRESH_INTERVAL_MS!
);

export const BACKGROUND_PIPELINE_REFRESH_SHOW_OWN_NOTIFICATIONS =
  `${process.env.REACT_APP_BACKGROUND_PIPELINE_REFRESH_SHOW_OWN_NOTIFICATIONS}` ===
  "true";

export const LOCAL_STORAGE_EXPIRY_DAYS = process.env
  .REACT_APP_LOCAL_STORAGE_EXPIRY_DAYS
  ? parseInt(process.env.REACT_APP_LOCAL_STORAGE_EXPIRY_DAYS)
  : null;

export const PRIVATE_BETA_FEATURE_USER_GROUP =
  process.env.REACT_APP_PRIVATE_BETA_FEATURE_USER_GROUP ?? "";

export const PRIVATE_BETA_FEATURE_USER_GROUP2 =
  process.env.REACT_APP_PRIVATE_BETA_FEATURE_USER_GROUP2 ?? "";

export const PRIVATE_BETA_FEATURE_USER_GROUP3 =
  process.env.REACT_APP_PRIVATE_BETA_FEATURE_USER_GROUP3 ?? "";

export const PRIVATE_BETA_FEATURE_USER_GROUP4 =
  process.env.REACT_APP_PRIVATE_BETA_FEATURE_USER_GROUP4 ?? "";

export const PRIVATE_BETA_FEATURE_USER_GROUP5 =
  process.env.REACT_APP_PRIVATE_BETA_FEATURE_USER_GROUP5 ?? "";

export const PRIVATE_BETA_FEATURE_USER_GROUP6 =
  process.env.REACT_APP_PRIVATE_BETA_FEATURE_USER_GROUP6 ?? "";

export const CASE_REVIEW_APP_REDIRECT_URL =
  process.env.REACT_APP_CASE_REVIEW_APP_REDIRECT_URL!;
export const BULK_UM_REDIRECT_URL = process.env.REACT_APP_BULK_UM_REDIRECT_URL!;

// for support/diagnostics, output our env into console when deployed
//  but not during test runs, too much noise
if (process.env.NODE_ENV !== "test") {
  const objectToLog = Object.keys(process.env)
    .sort()
    .reduce((obj, key) => {
      obj[key] = process.env[key];
      return obj;
    }, {} as Record<string, any>);

  console.log(JSON.stringify(objectToLog, null, 2));
}
