import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        status: "",
        repositories: [],
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomepageSlice.actions;

export const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
