const express = require('express');
const roomRouter = express.Router();
const Validation = require('../../controller/roomController/roomValidation.js')
const {getRoom, addRoom, updateRoom, deleteRoom}  = require('../../controller/roomController/roomController.js')

roomRouter.get('/getRoom',getRoom);
roomRouter.post('/addRoom',Validation,addRoom);
roomRouter.patch('/updateRoom/:room_id', updateRoom)
roomRouter.delete('/deleteRoom/:id',deleteRoom);

/**
 * @swagger
 * components:
 *      schemas:
 *          room:
 *              type: object
 *              properties:
 *                  room_id:
 *                      type: string
 *                      description: The unique identifier for a room
 *                  room_name:
 *                      type: string
 *                      description: The name of room
 */

/**
 * @swagger
 * /getRoom:
 *          get:
 *              summary: Retrieve all room records
 *              description: Retrieve a list of all room records from the database.
 *              tags: ["room"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of room records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/room'
 */

/**
 * @swagger
 * /addRoom:
 *          post:
 *              summary: Add a new room record
 *              description: Add a new room record to the database.
 *              tags: ["room"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/room'
 *              responses:
 *                  200:
 *                      description: Successfully added the new room record.
 */

/**
 * @swagger
 * /deleteRoom/{room_id}:
 *          delete:
 *              summary: Delete a room record
 *              description: Delete a room record from the database using the room id.
 *              tags: ["room"]
 *              parameters:
 *                  - in: path
 *                    name: room_id
 *                    required: true
 *                    description: The ID of the room to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the room record.
 */

/**
 * @swagger
 * /updateRoom/{room_id}:
 *          patch:
 *              summary: Update a room record
 *              description: Update a room record in the database using the room id.
 *              tags: ["room"]
 *              parameters:
 *                  - in: path
 *                    name: room_id
 *                    required: true
 *                    description: The ID of the room to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/room'
 *              responses:
 *                  200:
 *                      description: Successfully updated the student profile record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/room'
 */




module.exports = roomRouter;
