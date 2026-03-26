import * as dotenv from 'dotenv';
import * as Joi from 'joi';

dotenv.config();

// Schema for environment variable validation
const envSchema = Joi.object({
    PORT: Joi.number().default(3000),
    NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
    DATABASE_URL: Joi.string().required(),
    // Add more environment variables as needed
}).unknown();

// Validate environment variables
const { error, value } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Environment validation error: ${error.message}`);
}

export default value;