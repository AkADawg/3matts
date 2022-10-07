import addUserToDb from "../../lib/db-create-user";
import deleteUserFromDb from "../../lib/db-delete-user";
import getUsersFromDb from "../../lib/db-get-users";

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Returns a User's Details
 *     parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Numeric ID of the user to get
 *     responses:
 *       200:
 *         description: Customer profile object
 *       404:
 *         description: Customer not found
 */

const routeHandler = async (req, res) => {
  if (req.method === "GET") {
    // get users
    const users = await getUsersFromDb();
    console.log("user received from DB");
    res.send(users);
  }
  if (req.method === "POST") {
    const { name, email } = req.body;
    // Add a user
    await addUserToDb({ name, email });
    // Return the user
    res.status(200).json({
      name,
      email,
    });
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    // Delete a user
    await deleteUserFromDb({ id });
    // Return the id
    res.status(200).json({
      id,
    });
  }
};

export default routeHandler;
