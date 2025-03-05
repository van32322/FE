import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getCurrent = createAsyncThunk('app/current', async (data, { rejectedWithValue }) => {
    const response = await apis.apiGetCurrent()
    if (!response.success) return rejectedWithValue(response)
    return response.prodCategories
})