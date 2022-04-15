require "jekyll-spark"

module Jekyll
  class GoatHighlighterComponent < ComponentBlock
    def template(context)
      # Declare props as variables here
      content = @props["content"]
      content = content.gsub(/`/, '\`')
      content = content.gsub(/</, '&lt;')
      language = @props["language"]

      # Output rendered markup
      render = %Q[
        <goat-code-highlighter language='#{language}' class='demo-html'></goat-code-highlighter>
        <script>
          (function run(currentScript) {
            currentScript.parentElement.querySelector('.demo-html').value = `#{content}`;
          })(document.currentScript);
        </script>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "GoatHighlighter",
  Jekyll::GoatHighlighterComponent,
)
