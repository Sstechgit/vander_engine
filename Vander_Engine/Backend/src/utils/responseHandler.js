const sendSuccessResponse = (res, data, message = 'Success') => {
    res.status(200).json({ message, data });
  };
  
  const sendErrorResponse = (res, error, message = 'Error') => {
    res.status(500).json({ message, error });
  };
  
  module.exports = { sendSuccessResponse, sendErrorResponse };
  