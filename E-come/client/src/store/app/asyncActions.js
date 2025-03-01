import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getCategories = createAsyncThunk(
  "app/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apis.apiGetCategories();

      // Kiểm tra nếu response không hợp lệ
      if (!response || !response.success) {
        return rejectWithValue(response?.message || "Lỗi không xác định");
      }

      return response.prodCategories; // Trả về danh sách categories nếu thành công
    } catch (error) {
      return rejectWithValue(error.message || "Lỗi khi gọi API");
    }
  }
);
