import arviz as az
import numpy as np
values = np.random.normal(0, 1, 500)
az.plot_dot(values)
