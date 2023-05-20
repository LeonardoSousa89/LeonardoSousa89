# ⬥ Netlify CLI
# Read the docs: https://docs.netlify.com/cli/get-started/
# Support and bugs: https://github.com/netlify/cli/issues

# VERSION
#   netlify-cli/14.3.1 win32-x64 node-v18.16.0

# USAGE
#   $ netlify [COMMAND]

# COMMANDS
#   $ addons       (Beta) Manage Netlify Add-ons
#   $ api          Run any Netlify API method
#   $ build        (Beta) Build on your local machine
#   $ completion   (Beta) Generate shell completion script
#   $ deploy       Create a new deploy from the contents of a folder
#   $ dev          Local dev server
#   $ env          Control environment variables for the current site
#   $ functions    Manage netlify functions
#   $ recipes      (Beta) Create and modify files in a project using pre-defined
#                  recipes
#   $ graph        (Deprecated) Control the Netlify Graph functions for the
#                  current site
#   $ init         Configure continuous deployment for a new or existing site. To
#                  create a new site without continuous deployment, use `netlify sites:create`
#   $ link         Link a local repo or project folder to an existing site on
#                  Netlify
#   $ lm           Handle Netlify Large Media operations
#   $ login        Login to your Netlify account
#   $ open         Open settings for the site linked to the current folder
#   $ serve        (Beta) Build the site for production and serve locally. This
#                  does not watch the code for changes, so if you need to rebuild your site then you must
#                  exit and run `serve` again.
#   $ sites        Handle various site operations
#   $ status       Print status information
#   $ switch       Switch your active Netlify account
#   $ unlink       Unlink a local folder from a Netlify site
#   $ watch        Watch for site deploy to finish

# O erro do netlify-cli "Site not found", pode ser resolvido, excluindo a
# pasta ".netlify" e fazendo um novo deploy ou rodando o comando "netlify link"