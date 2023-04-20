export const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: () => {},
});

export default counterSlice.reducer;
