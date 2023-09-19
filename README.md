# 11ty-with-vento

> [!WARNING]
> This is a work-in-progress! Currently only basic template support is included but I'm working on feature parity with built-in template languages in 11ty like Nunjucks.

This is an experiment with using the [Vento](https://github.com/oscarotero/vento) templating engine instead of Nunjucks/Liquid/etc.

## Usage

**Start the development server**:

```sh
pnpm dev
```

**Build the site for production**:

```sh
pnpm build
```

## Customizing

### Adding a new page

To add a new page, create a new file in the `src` directory. For example, to create a new page at the URL `/about`, create a file at `src/about.{md,vto}`.

### Adding a new layout

To add a new layout, create a new file in the `src/_includes` directory. For example, to create a new layout for posts, create a file at `src/_includes/post.vto`.

### Modifying site metadata

To modify the site metadata, edit the `src/_data/site.json` file. Feel free to add, change, and remove any properties.
To use a property in a template, use `{{ site.<property> }}`. For example, to use the site description in a template, use `{{ site.description }}`.
