

const controllers = require('./controllers');
const midds = require('../../midds');

module.exports = [
  /**
   * Get the file storing info
   * 
   * @api {post} /api/slave/get-file-storing-info
   * @apiParam {object} info
   * @apiParam {string} info.size
   * @apiParam {string} info.hash
   * @apiSuccess {object} - { candidates: ... }
   */
  { 
    name: 'getFileStoringInfo',
    method: 'post',
    url: '/get-file-storing-info', 
    fn: controllers.getFileStoringInfo
  },
  
  /**
   * Get the file links
   * 
   * @api {post} /api/slave/get-file-links
   * @apiParam {string} hash - file hash
   */
  { 
    name: 'getFileLinks',
    method: 'post', 
    url: '/get-file-links', 
    fn: controllers.getFileLinks
  },
  
  /**
   * Remove the file
   * 
   * @api {post} /api/slave/remove-file
   * @apiParam {string} hash - file hash
   */
  { 
    name: 'removeFile',
    method: 'post', 
    url: '/remove-file',
    fn: [      
      midds.requestQueueFileHash,
      controllers.removeFile
    ]
  }
];
