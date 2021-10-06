data = az.from_dict(
    observed_data = { "y": np.random.normal(size=(5, 7)) },
    posterior_predictive = {"y": np.random.randn(4, 1000, 5, 7) / 2},
    dims={"y": ["dim1", "dim2"]},
    coords={"dim1": range(5), "dim2": range(7)}
)
az.plot_lm(idata=data, y="y", plot_dim="dim1")
