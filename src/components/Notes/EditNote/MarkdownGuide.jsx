import styles from './EditNote.css';

export default function MarkdownGuide({ toggle }) {
  return (
    <div
      className={toggle ? styles.markdownGuideOpen : styles.markdownGuideClosed}
    >
      <h3>Markdown Guide</h3>
      <table className={styles.markdownTab}>
        <thead>
          <tr>
            <th>Element</th>
            <th>Syntax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>code block</td>
            <td>
              ```
              <p /> Text <p /> ```
            </td>
          </tr>
          <tr>
            <td>H1</td>
            <td># Text</td>
          </tr>
          <tr>
            <td>H2</td>
            <td>## Text</td>
          </tr>
          <tr>
            <td>H6</td>
            <td>###### Text</td>
          </tr>
          <tr>
            <td>Italic</td>
            <td>*Text*</td>
          </tr>
          <tr>
            <td>Bold</td>
            <td>**Text**</td>
          </tr>
          <tr>
            <td>Strikethrough</td>
            <td>~~Text~~</td>
          </tr>
          <tr>
            <td>Subscript</td>
            <td>Text~sub</td>
          </tr>
          <tr>
            <td>Superscript</td>
            <td>Text^super</td>
          </tr>
          <tr>
            <td>Blockquote</td>
            <td>&gt; Text</td>
          </tr>
          <tr>
            <td>Unordered List</td>
            <td>
              - Item 1 <p />- Item 2
            </td>
          </tr>
          <tr>
            <td>Ordered List</td>
            <td>
              1. Item 1 <p />
              2. Item 2
            </td>
          </tr>
          <tr>
            <td>Code</td>
            <td>`Text`</td>
          </tr>
          <tr>
            <td>Horizontal Rule</td>
            <td>---</td>
          </tr>
          <tr>
            <td>Link</td>
            <td>[text](www.text.com)</td>
          </tr>
          <tr>
            <td>Image</td>
            <td>![alt text](image.png)</td>
          </tr>
          <tr>
            <td>Table</td>
            <td>
              | Text | Text | <p />
              |--|--| <p />
              | Other | Text | <p />
              |More | Text |
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
