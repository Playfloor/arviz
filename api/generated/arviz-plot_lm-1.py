import arviz as az
import numpy as np
import xarray as xr
idata = az.load_arviz_data('regression1d')
x = xr.DataArray(np.linspace(0, 1, 100))
idata.posterior["y_model"] = idata.posterior["intercept"] + idata.posterior["slope"]*x
az.plot_lm(idata=idata, y="y", x=x)
