/* eslint import/unambiguous:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

require('../vendor/hotjar')
require('../lib/exit_warn')

const HighlightControl = require('../components/highlightcontrol')
const ConditionalSubfields = require('../components/conditional_subfields')
const PrintSection = require('../components/print_section')
const Share = require('../components/share')

HighlightControl.init()
ConditionalSubfields.init()
PrintSection.init()
Share.init()
// Support component names relative to this directory:
var componentRequireContext = require.context('components', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
