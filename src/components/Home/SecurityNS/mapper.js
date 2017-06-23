export const convertToJson = (state) => {
  var jsonObject = {}
    jsonObject["type"]                                                              = state.type
    jsonObject["policyData"]                                                        = {}
    jsonObject["policyData"]["name"]                                                = state.name

    return jsonObject;
}
