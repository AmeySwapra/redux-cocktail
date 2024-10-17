import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch all cocktails
export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    return response.json();
  }
);

// Async thunk to fetch a single cocktail by ID
export const fetchSingleCocktails = createAsyncThunk(
  "cocktails/fetchSingleCocktails",
  async ({ id }) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.drinks ? data.drinks[0] : null; // Directly assign the single cocktail object
  }
);

// Async thunk to search cocktails by name
export const fetchSearchCocktails = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({ searchText }) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    return response.json();
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: null, // Initialize as null for a single cocktail object
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks || [];
        state.error = null;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktail = action.payload; // Assign the single cocktail object directly
        state.error = null;
      })
      .addCase(fetchSingleCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSearchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks || [];
        state.error = null;
      })
      .addCase(fetchSearchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cocktailSlice.reducer;
