import addUserToDb from "../../lib/db-create-user";
import getUserFromDb from "../../lib/db-get-user";

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
    // get a user
    const user = await getUserFromDb();
    console.log("user received from DB");
    res.send(user);
  }
  if (req.method === "POST") {
    console.log(req.body);
    const { name, email } = req.body;
    // Add a user
    await addUserToDb({ name, email });
    // Return the user
    res.status(200).json({
      name,
      email,
    });
  }
};

export default routeHandler;
