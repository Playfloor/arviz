centered_data = az.load_arviz_data('centered_eight')
axes = az.plot_forest([non_centered_data, centered_data],
                           model_names = ["non centered eight", "centered eight"],
                           kind='forestplot',
                           var_names=["^the"],
                           filter_vars="regex",
                           combined=True,
                           figsize=(9, 7))
axes[0].set_title('Estimated theta for 8 schools models')
