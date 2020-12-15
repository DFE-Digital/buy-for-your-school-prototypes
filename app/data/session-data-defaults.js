/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  "auxiliary-services-status": "not-started",
  "customer-numbers-status": "not-started",
  "service-types-times-status": "not-started",
  "service-dates-status": "not-started",
  "food-standards-status": "not-started",
  "pre-ordering-status": "not-started",
  "payment-methods-status": "not-started",
  answers: []

}
