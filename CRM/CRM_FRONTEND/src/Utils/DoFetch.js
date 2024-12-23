export const DoFetch = async (
  url,
  method = "GET",
  body = null,
  headerExt = null
) => {
  try {
    let headers = {
      "Authorization": `Bearer ${sessionStorage.getItem("accessT")}`,
    };
    if (headerExt) {
      headers = { ...headers, ...headerExt };
    }
    let options = {
      method,
      headers,
    };
    if (body) {
      options = {
        ...options,
        body,
      };
    }
    // console.log(options)
    let response=await fetch(url,options)
    let result=await response.json()
    return result
  } catch (error) {
    console.log(error)
    return null;
  }
};
