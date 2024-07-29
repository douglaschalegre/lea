import express from 'express'
import cors from 'cors'

import { router } from './routes';
import {session} from './session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.use(express.json())

app.use(router)
app.listen(1337, () => console.log('server running on port 1337'))
session('5582981214848')
