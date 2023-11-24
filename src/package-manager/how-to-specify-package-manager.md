# How to specify packageManager ? (global + local)

### Global Configuration:

Global configuration typically refers to the default package manager that will be used for all projects unless overridden locally.


To set npm|pnpm|yarn as the default package manager globally, you can use the following command:

```bash
npm config set package-manager {npm|pnpm|yarn} -g
```


### Local Configuration:

Local configuration is specific to a particular project and can override the global configuration.

In your project directory, create or edit the `.npmrc`| `.pnpmrc` | `.yarnrc` file and add the following line:

```plaintext
package-manager=npm|pnpm|yarn
```

Or, you can use the following command:

```bash
npm config set package-manager npm|pnpm|yarn
```

### Checking the Configuration:

You can check the current configuration by using the following commands:


```bash
npm|pnpm|yarn config get package-manager
```
