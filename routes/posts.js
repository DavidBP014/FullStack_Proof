const express = require('express');
const auth = require('../middleware/auth');
const { createPost, getAllPosts, getMyPosts } = require('../controllers/postsController');
const router = express.Router();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

router.post('/', auth, createPost);
router.get('/', getAllPosts);
router.get('/me', auth, getMyPosts);

module.exports = router;

exports.getAllPosts = async(req, res) => {
    try {
        const { userId, date, keywords } = req.query;
        let query = {};

        if (userId) {
            query.author = userId;
        }

        if (date) {
            query.createdAt = { $gte: new Date(date) };
        }

        if (keywords) {
            query.title = { $regex: keywords, $options: 'i' };
        }

        const posts = await Post.find(query).populate('author', 'name');
        res.send(posts);
    } catch (error) {
        res.status(500).send();
    }
};

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Easy Media API',
            description: 'API documentation for Easy Media',
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ['app.js', './routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user for Easy Media.
 *     responses:
 *       201:
 *         description: User registered successfully
 *       500:
 *         description: Error registering user
 */
router.post('/register', register);