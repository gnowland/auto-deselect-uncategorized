=== Auto-Deselect Uncategorized ===
**Contributors:** gnowland  
**Donate link:** https://buymeacoff.ee/gnowland  
**Tags:** taxonomy, taxonomies, terms, category, uncategorized, deuncategorize, deselect uncategorized, admin, editor, block editor, gutenberg, react, interface, ui, post, metabox  
**Requires at least:** 5.0.0  
**Tested up to:** 5.5.3  
**Stable tag:** 1.0.0  
**Requires PHP:** 5.6.0  
**License:** GPLv3 or later  
**License URI:** http://www.gnu.org/licenses/gpl-3.0.html  

Automatically deselect the "Uncategorized" category (or your default category) when another is selected; select it when no others are selected.

== Description ==

Automatically and visibly deselect the "Uncategorized" category (or your custom default post category) when another category is selected, and select it when no other categories are selected. Supports the WordPress 5.0+ Block Editor (Gutenberg).

= Purpose =

To prevent the Uncategorized category from being attached to posts that are categorized, of course.

> "When you author a post in WordPress, it will automatically assign the post to your default category. This is determined by navigating to Settings > Writing and looking for Default Post Category. You can set the default category to a different one of your choosing, and you can even rename 'Uncategorized' to something that makes more sense for your site.
>
> The challenge with the WordPress default category is that authors will frequently draft their articles and choose the appropriate category at the end of the process. All too often, they forget to uncheck the default category, so you have lots of mis-categorized, or double-categorized posts. In fact, you can see thousands of WordPress sites out there that have everything categorized under 'Uncategorized', the default setting in WordPress." (GeekWire, 2015)

= Support =

Support is handled in the [WordPress forums](http://wordpress.org/support/plugin/auto-deselect-uncategorized). Please note that support is limited and does not cover any custom implementation of the plugin. Before posting a question, please confirm that the problem still exists with a default theme and with all other plugins disabled.

Please report any bugs, errors, warnings, code problems on [GitHub](https://github.com/gnowland/auto-deselect-uncategorized/issues).

== Video ==

https://www.youtube.com/watch?v=LDZCqY7H-pQ

== Screenshots ==

1. Animation showing the Auto Deselect Uncategorized plugin in action on the post editor screen.

== Installation ==

1. Upload the `plugin` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= Are there any settings? =

The plugin automatically targets the "Categories" taxonomy and uses the "Default Post Category" that's set in Settings > Writing.

== Development ==

Contributions in the way of [Pull Requests](https://github.com/gnowland/auto-deselect-uncategorized/pulls) are welcome. Please follow the WordPress.org Block Editor Handbook [Development Environment](https://developer.wordpress.org/block-editor/tutorials/devenv/) setup and familiarize yourself with the [JS Build Setup](https://developer.wordpress.org/block-editor/tutorials/javascript/js-build-setup/) instructions and [Coding Guidelines](https://developer.wordpress.org/block-editor/contributors/develop/coding-guidelines/).

= Develop =

```shell
wp-env start
npm run start
```

= Release =

1. Update Changelog in `README.txt`
2. Bump version in `package.json`
3. Run release script:

   ```shell
   npm run release
   ```

= Clean =

WARNING: Destructive!

- Destroys test WordPress Docker container and removes build folder:

```shell
npm run destroy
```

== Changelog ==

= 1.0 =
* Initial release
