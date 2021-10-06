import arviz as az
nchains, ndraws = (4, 500)
obs_data = {
    "y": 2 * np.arange(1, 9) + 3,
    "z": 2 * np.arange(8, 12) + 3,
}
posterior_predictive = {
    "y": np.random.normal(
        (obs_data["y"] * 1.2) - 3, size=(nchains, ndraws, len(obs_data["y"]))
    ),
    "z": np.random.normal(
        (obs_data["z"] * 1.2) - 3, size=(nchains, ndraws, len(obs_data["z"]))
    ),
 }
idata = az.from_dict(
    observed_data=obs_data,
    posterior_predictive=posterior_predictive,
    coords={"obs_dim": np.arange(1, 9), "pred_dim": np.arange(8, 12)},
    dims={"y": ["obs_dim"], "z": ["pred_dim"]},
)
ax = az.plot_ts(idata=idata, y="y", y_holdout="z")
