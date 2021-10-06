ndim1, ndim2 = (5, 7)
data = {
    "y": np.random.normal(size=(ndim1, ndim2)),
    "z": np.random.normal(size=(ndim1, ndim2)),
}
posterior_predictive = {
    "y": np.random.randn(nchains, ndraws, ndim1, ndim2),
    "z": np.random.randn(nchains, ndraws, ndim1, ndim2),
}
const_data = {"x": np.arange(1, 6), "x_pred": np.arange(5, 10)}
idata = az.from_dict(
    observed_data=data,
    posterior_predictive=posterior_predictive,
    constant_data=const_data,
    dims={
        "y": ["dim1", "dim2"],
        "z": ["holdout_dim1", "holdout_dim2"],
    },
    coords={
        "dim1": range(ndim1),
        "dim2": range(ndim2),
        "holdout_dim1": range(ndim1 - 1, ndim1 + 4),
        "holdout_dim2": range(ndim2 - 1, ndim2 + 6),
    },
)
az.plot_ts(
    idata=idata,
    y="y",
    plot_dim="dim1",
    y_holdout="z",
    holdout_dim="holdout_dim1",
)
