# gitlab-mcp (fork para GitLab 10.8)

Fork de [zereight/gitlab-mcp](https://github.com/zereight/gitlab-mcp) adaptado a GitLab 10.8: esquemas relajados y herramientas no soportadas eliminadas.

Para consultar la documentación original, ir al upstream.

## Instalación

```bash
git clone https://github.com/JuanPardos/gitlab-mcp.git
cd gitlab-mcp
npm install --ignore-scripts
```

No requiere compilar: se ejecuta directamente desde el código fuente con `tsx`. Si clonas en otra ruta, ajusta la ruta de `index.ts` en la configuración.

## Configuración ejemplo en `claude.json`

```json
"gitlab_local": {
  "type": "stdio",
  "command": "node",
  "args": [
    "--import",
    "tsx/esm",
    "C:/Tools/gitlab-mcp/index.ts"
  ],
  "env": {
    "GITLAB_PERSONAL_ACCESS_TOKEN": "GITLAB_PAT",
    "GITLAB_API_URL": "https://gitlab_instance/api/v4",
    "GITLAB_IS_OLD": "true"
  }
}
```
