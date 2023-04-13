import { createSlice } from "@reduxjs/toolkit";

const personalHompageSlice = createSlice({
    baseName: "personalHompage",
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (_, {payload: repositories}) =>  ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHompageSlice.actions;

const selectPersonalHompageState = state => state.personalHompage;

export const selectRepositories = state => selectPersonalHompageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHompageState(state).status;

export default personalHompageSlice.reducer;