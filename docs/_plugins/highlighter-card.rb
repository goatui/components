require "jekyll-spark"

module Jekyll
  class GoatHighlighterCardComponent < ComponentBlock
    def template(context)
      # Declare props as variables here
      content = @props["content"]
      language = @props["language"]

      # Output rendered markup
      render = %Q[
      <goat-card>
        <goat-card-content>
          #{content}
        </goat-card-content>
        <goat-card-content class="no-padding">
        <goat-code-highlighter language='#{language}' class='demo-html'>
        <pre><code>#{content}</code></pre>
        </goat-code-highlighter>
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
