import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
    await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',         // uniquer thunk identifier
    async (tuitId) => {         // wraps
    await service.deleteTuit(tuitId)  // service method
    return tuitId               // from reducer's store
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
    const newTuit = await service.createTuit(tuit)
    return newTuit
    })

export const updateTuitThunk =
    createAsyncThunk(
    'tuits/updateTuit',                 // unique identifier
    async (tuit) =>                    // accepts updated tuit
    await service.updateTuit(tuit)  // sends updated tuit to server with service
    )