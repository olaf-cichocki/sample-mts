export default {
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.wasm', '.js', '.jsx', '.scss'],
        fallback: {
            fs: false,
            child_process: false,
        },
    },
    module: {
        rules: [],
    },
    plugins: [],
};
