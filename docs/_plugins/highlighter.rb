require "jekyll-spark"

module Jekyll
  class GoatHighlighterComponent < ComponentBlock
    def template(context)
      # Declare props as variables here
      content = @props["content"]
      language = @props["language"]
      format = @props["format"]

      # Output rendered markup
      render = %Q[
        <goat-code-highlighter language='#{language}' format='#{format}' class='demo-html'>
        <pre><code>#{content}</code></pre>
        </goat-code-highlighter>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "GoatHighlighter",
  Jekyll::GoatHighlighterComponent,
)
