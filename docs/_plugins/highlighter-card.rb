require "jekyll-spark"

module Jekyll
  class GoatHighlighterCardComponent < ComponentBlock
    def template(context)
      # Declare props as variables here
      content = @props["content"]
      parsedContent = content.gsub(/`/, '\`')
      parsedContent = parsedContent.gsub(/</, '&lt;')
      language = @props["language"]

      # Output rendered markup
      render = %Q[
      <goat-card>
        <goat-card-content>
          #{content}
        </goat-card-content>
        <goat-card-content>
        <goat-code-highlighter language='#{language}' class='demo-html'></goat-code-highlighter>
        <script>
          (function run(currentScript) {
            currentScript.parentElement.querySelector('.demo-html').value = `#{parsedContent}`;
          })(document.currentScript);
        </script>
        </goat-card-content>
       </goat-card>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "GoatHighlighterCard",
  Jekyll::GoatHighlighterCardComponent,
)
