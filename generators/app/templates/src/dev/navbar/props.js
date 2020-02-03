/**
 * Props item - Houses all the navbar items and submenu items
 */
const props = [
    <% if (path == "GettingStartedLink/") { %>
    {
       name: "help", //Used in css and js reference
       labelText: "Getting Started &amp; Help", // Displayed to user
       hasSubmenu: true, // Used to build the nav tree
       submenuItems: [
            {
                name: "<%= root %>",
                labelText: "<%= label %>"
            }
        ]
    },
    <% } %>
    <% if (path == "ActivityLink/") { %>
     {
         name: "activity",
         labelText: "Activity",
         hasSubmenu: true,
         submenuItems: [
                {
                    name: "<%= root %>",
                    labelText: "<%= label %>"
                }
            ]
    },
    <% } %>
    <% if (path == "EngineMaintenanceLink/") { %>
    {
        name: "engine",
        labelText: "Engine &amp; Maintenance",
        hasSubmenu: true,
        submenuItems: [
                {
                    name: "<%= root %>",
                    labelText: "<%= label %>"
                }
            ]
        },
        <% } %>
    <% if (path == "ZoneAndMessagesLink/") { %>
     {
         name: "zone",
         labelText: "Zones &amp; Messages",
         hasSubmenu: true,
         submenuItems: [
                {
                    name: "<%= root %>",
                    labelText: "<%= label %>"
                }
            ]
        },
    <% } %>
    <% if (path == "RuleAndGroupsLink/") { %>
     {
        name: "rule",
        labelText: "Rules &amp; Groups",
        hasSubmenu: true,
        submenuItems: [
            {
                name: "<%= root %>",
                labelText: "<%= label %>"
            }
        ]
    },
    <% } %>
    <% if (path == "AdministrationLink/") { %>
     {
        name: "administration",
        labelText: "Administration",
        hasSubmenu: true,
        submenuItems: [
                {
                    name: "<%= root %>",
                    labelText: "<%= label %>"
                }
            ]
        },
    <% } %>
     <% if (path == ""){ %>
     {
        name: "<%= root %>",
        labelText: "<%= label %>",
        hasSubmenu: false,
        submenuItems: []
     }
     <% } %>
];

module.exports = props;