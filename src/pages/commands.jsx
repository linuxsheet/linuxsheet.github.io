import { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span className="accordion-title">{title}</span>
        <span className={`accordion-chevron ${open ? "open" : ""}`}>▼</span>
      </button>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}

function Commands() {
  return (
    <div>
      <Accordion title="ls">
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ls</td>
              <td>List (not hidden) files</td>
            </tr>
            <tr>
              <td>ls -a</td>
              <td>List all files</td>
            </tr>
            <tr>
              <td>ls -A</td>
              <td>List all files except . and ..</td>
            </tr>
            <tr>
              <td>ls -l</td>
              <td>List as list</td>
            </tr>
            <tr>
              <td>ls --color=always/never/auto</td>
              <td>Color the output</td>
            </tr>
            <tr>
              <td>ls -F</td>
              <td>Add trailing symbol</td>
            </tr>
            <tr>
              <td>ls -1</td>
              <td>List one file per line</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <Accordion title="pwd">
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>pwd</td>
              <td>Print Working Directory</td>
            </tr>
            <tr>
              <td>pwd -P</td>
              <td>Print physical working directory (resolve symlinks)</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <Accordion title="fzf">
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fzf</td>
              <td>List all files and output selected file's path</td>
            </tr>
            <tr>
              <td>fzf -q [query]</td>
              <td>Filter options</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <Accordion title="notify-send">
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>notify-send [title] [content]</td>
              <td>Send a notification</td>
            </tr>
            <tr>
              <td>notify-send -u low/normal/critical</td>
              <td>Send a notification with specified urgency level</td>
            </tr>
            <tr>
              <td>notify-send -i [icon.png]</td>
              <td>Set an icon for notification</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <Accordion title="bat">
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NOTE</td>
              <td>In some systems that command is batcat.</td>
            </tr>
            <tr>
              <td>bat --pager=[pager program]</td>
              <td>Set pager program (less is recommended)</td>
            </tr>
            <tr>
              <td>bat -l [language]</td>
              <td>Set language explicitly for syntax highlighting</td>
            </tr>
            <tr>
              <td>bat -L</td>
              <td>List all supported languages</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <Accordion title="Some Cheat Commands">
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[command] $(fzf)</td>
              <td>Run [command] with an argument selected by fzf</td>
            </tr>
            <tr>
              <td>vim $(fzf)</td>
              <td>Edit selected file via Vim</td>
            </tr>
            <tr>
              <td>ps aux | fzf</td>
              <td>List all processes</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <p>Source: <a href="https://github.com/tldr-pages/tldr/tree/main/pages" target="_blank">TL;DR Pages</a></p>
    </div>
  );
}

export default Commands;
