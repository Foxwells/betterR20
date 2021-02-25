function initTemplatePageSettings () {
	// no mods; just switched in to grant full features to non-pro
	const templatePageSettings = `<script id='tmpl_pagesettings' type='text/html'>
    <ul class='nav nav-tabs pagedetails_navigation'>
        <li class='active'>
            <a data-tab='pagedetails' href='javascript:void(0);'>
                <h2>Page Details</h2>
            </a>
        </li>
    </ul>
    <div class='tab-content'>
        <div class='pagedetails tab-pane' style='display:block;'>
            <!-- * SIZE */ -->
            <div class='size_settings' id='size_settings'>
                <div class='pagedetails__header'>
                    <h3 class='page_title'>Size</h3>
                </div>
                <div class='pagedetails__subheader'>
                    <h4>Width</h4>
                </div>
                <div class='pagedetails__container grid_settings-input--list input-group'>
                    <div class='pagedetails-input size_settings-input'>
                        <div>
                            <label class='sr-only' for='page-size-width-input'>enter a custom page width in pixels</label>
                            <input id="page-size-width-input" type="number" class="width units page_setting_item" value="<$!this.model.get("width")$>" />
                        </div>
                        <div class='disable_box'>px</div>
                    </div>
                    <div class='col pagedetails-symbol'>
                        <span class='page_setting_item'>X</span>
                    </div>
                    <div class='pagedetails-input size_settings-input'>
                        <div>
                            <label class='sr-only' for='page-size-width-multiplier'>custom page width will be multiplied by 70</label>
                            <input id='page-size-width-multiplier' type="text" value="70" class="page_setting_item" disabled>
                        </div>
                        <div class='disable_box'>px</div>
                    </div>
                    <div class='col pagedetails-symbol'>
                        <span class='page_setting_item'>=</span>
                    </div>
                    <div class='pagedetails-input size_settings-input'>
                        <div>
                            <label class='sr-only' for='page-size-width-total'>total page width in pixels after being multiplied by 70</label>
                            <input id='page-size-width-total' type="number" class="px_width pixels page_setting_item" value="<$!this.model.get("width")*70$>" />
                        </div>
                        <div class='disable_box'>px</div>
                    </div>
                </div>
                <div class='pagedetails__subheader'>
                    <h4>Height</h4>
                </div>
                <div class='pagedetails__container grid_settings-input--list input-group'>
                    <div class='pagedetails-input size_settings-input'>
                        <div>
                            <label class='sr-only' for='page-size-height-input'>enter a custom page height in pixels</label>
                            <input id="page-size-height-input" type="number" class="height units page_setting_item" value="<$!this.model.get("height")$>" />
                        </div>
                        <div class='disable_box'>px</div>
                    </div>
                    <div class='col pagedetails-symbol'>
                        <span class='page_setting_item'>X</span>
                    </div>
                    <div class='pagedetails-input size_settings-input'>
                        <div>
                            <label class='sr-only' for='page-size-height-multiplier'>custom page height will be multiplied by 70</label>
                            <input id='page-size-height-multiplier' type="text" value="70" class="page_setting_item" disabled>
                        </div>
                        <div class='disable_box'>px</div>
                    </div>
                    <div class='col pagedetails-symbol'>
                        <span class='page_setting_item'>=</span>
                    </div>
                    <div class='pagedetails-input size_settings-input'>
                        <div>
                            <label class='sr-only' for='page-size-height-total'>total page height in pixels after being multiplied by 70</label>
                            <input id='page-size-height-total' type="number" class="px_height pixels page_setting_item" value="<$!this.model.get("height")*70$>" />
                        </div>
                        <div class='disable_box'>px</div>
                    </div>
                </div>
                <div class='fine-print text-muted'>
                    <p>The height and width are true to size when zoom is set to 100%.</p>
                </div>
            </div>
            <hr>
            <!-- * BACKGROUND */ -->
            <div class='background_settings'>
                <div class='pagedetails__header'>
                    <h3 class='page_title'>Background</h3>
                </div>
                <div class='pagedetails__subheader'>
                    <h4>Color</h4>
                </div>
                <input class='pagebackground' type='text'>
            </div>
            <hr>
            <!-- * SCALE */ -->
            <div class='scale_settings'>
                <div class='pagedetails__header'>
                    <h3 class='page_title'>Scale</h3>
                </div>
                <div class='pagedetails__subheader'>
                    <h4 class='text-capitalize'>grid cell distance</h4>
                </div>
                <div class='pagedetails__container'>
                    <div class='pagedetails-input scale_settings-input'>
                        <div>
                            <label class='sr-only' for='page-scale-grid-cell-distance'>enter a custom distance for each grid cell</label>
                            <input id='page-scale-grid-cell-distance' type="number" class="scale_number" value="<$!this.model.get("scale_number")$>" />
                        </div>
                        <div class='scale_settings-select'>
                            <label class='sr-only' for='page-scale-grid-cell-label-select'>choose a label for your grid cells</label>
                            <select class='scale_units' id='page-scale-grid-cell-label-select'>
                                <option value='ft'>ft.</option>
                                <option value='m'>m.</option>
                                <option value='km'>km.</option>
                                <option value='mi'>mi.</option>
                                <option value='in'>in.</option>
                                <option value='cm'>cm.</option>
                                <option value='un'>un.</option>
                                <option value='hex'>hex</option>
                                <option value='sq'>sq.</option>
                                <option value='custom'>Custom</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class='hidden' id='custom_scale_units'>
                    <div class='pagedetails__subheader'>
                        <h4>custom label</h4>
                    </div>
                    <div class='pagedetails__container'>
                        <div class='pagedetails-input custom_scale_units-input'>
                            <label class='sr-only' for='page-scale-grid-cell-custom-label'>enter a custom label for your grid cells</label>
                            <input id="page-scale-grid-cell-custom-label" type="text" value="<$!this.model.get("scale_units")$>" />
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <!-- * GRID */ -->
            <div class='grid_settings' data-feature_enabled='showgrid' id='grid_settings'>
                <div class='row'>
                    <div class='col-xs-7 pagedetails__header'>
                        <h3 class='page_title'>Grid</h3>
                    </div>
                    <div class='col-xs-3 grid_switch'>
                        <label class='switch'>
                            <label class='sr-only' for='page-grid-display-toggle'>toggle the page grid</label>
                            <input class='gridenabled feature_enabled' id='page-grid-display-toggle' type='checkbox' value='1'>
                            <span class='slider round'></span>
                            </input>
                        </label>
                    </div>
                </div>
                <div class='grid_subsettings' id='grid_subsettings'>
                    <div class='pagedetails__container'>
                        <div class='pagedetails__subheader'>
                            <h4>Type</h4>
                        </div>
                        <div class='grid_settings-select'>
                            <label class='sr-only' for='gridtype'>select the grid type</label>
                            <select id='gridtype'>
                                <option selected value='square'>Square</option>
                                <option value='hex'>Hex (V)</option>
                                <option value='hexr'>Hex (H)</option>
                            </select>
                        </div>
                    </div>
                    <div class='pagedetails__container grid_settings-row--hex flex-wrap align-items-center' id='hexlabels'>
                        <div class='col-xs-7 pagedetails__subheader'>
                            <h4>show hex labels</h4>
                        </div>
                        <div class='col-xs-3 grid_switch'>
                            <label class='switch'>
                                <label class='sr-only' for='page-grid-hex-label-toggle'>toggle display labels inside of hexes</label>
                                <input class='gridlabels' id='page-grid-hex-label-toggle' type='checkbox' value='1'>
                                <span class='slider round'></span>
                                </input>
                            </label>
                        </div>
                    </div>
                    <div class='pagedetails__subheader help-icon'>
                        <h4>Measurement</h4>
                        <a class='tipsy-w showtip pictos' href='https://roll20.zendesk.com/hc/en-us/articles/360039674913-Ruler' target='_blank' title='Controls how diagonal cells are measured.'>?</a>
                    </div>
                    <div class='pagedetails__container'>
                        <div class='grid_settings-select'>
                            <select id='diagonaltype'>
                                <option class='squareonly' selected value='foure'>D&D 5E/4E Compatible</option>
                                <option class='squareonly' value='threefive'>Pathfinder/3.5E Compatible</option>
                                <option class='squareonly' value='manhattan'>Manhattan</option>
                                <option class='hexonly' value='hex'>Hex Path</option>
                                <option value='pythagorean'>Euclidean</option>
                            </select>
                        </div>
                    </div>
                    <div class='pagedetails__subheader help-icon'>
                        <h4>Cell Width</h4>
                        <a class='tipsy-w showtip pictos' href='https://roll20.zendesk.com/hc/en-us/articles/360039675373-Page-Settings' target='_blank' title='The number of cells per 70 pixels in your grid. Ex .5 = 35 pixels per cell.'>?</a>
                    </div>
                    <div class='pagedetails__container grid_settings-input--list'>
                        <div class='pagedetails-input grid_settings-input'>
                            <label class='sr-only' for='page-grid-cell-width-input'>enter a custom cell width</label>
                            <input id="page-grid-cell-width-input" type="number" class="grid-cell-width snappingincrement units" value="<$!this.model.get("snapping_increment")$>" />
                        </div>
                        <div class='col pagedetails-symbol'>
                            <span class='page_setting_item'>X</span>
                        </div>
                        <div class='pagedetails-input grid_settings-input'>
                            <div>
                                <label class='sr-only' for='page-grid-cell-width-multiplier'>custom cell width will be multiplied by 70</label>
                                <input id='page-grid-cell-width-multiplier' type="text" value="70" class="page_setting_item" disabled>
                            </div>
                            <div class='disable_box'>px</div>
                        </div>
                        <div class='col pagedetails-symbol'>
                            <span class='page_setting_item'>=</span>
                        </div>
                        <div class='pagedetails-input grid_settings-input'>
                            <div>
                                <label class='sr-only' for='page-grid-cell-width-total'>total cell width in pixels after being multiplied by 70</label>
                                <input id="page-grid-cell-width-total" type="number" class="px_snappingincrement pixels" value="<$!this.model.get("snapping_increment")*70$>" />
                            </div>
                            <div class='disable_box'>px</div>
                        </div>
                    </div>
                    <div class='pagedetails__subheader'>
                        <h4>Color</h4>
                    </div>
                    <div class='pagedetails__container'>
                        <div>
                            <input class='gridcolor' type='text'>
                        </div>
                    </div>
                    <div class='pagedetails__subheader'>
                        <h4>Opacity</h4>
                    </div>
                    <div class='pagedetails__container'>
                        <div>
                            <div class='gridopacity'></div>
                        </div>
                    </div>
                </div>
            </div><!-- * Audio */ -->
            <hr>
            <div class='audio_settings'>
                <div class='pagedetails__header'>
                    <h3 class='page_title'>Audio</h3>
                </div>
                <div class='pagedetails__subheader'>
                    <h4>Play on Load</h4>
                </div>
                <div class='pagedetails__container'>
                    <label class='sr-only' for='page-audio-play-on-load'>play an audio track on page load</label>
                    <select class='pagejukeboxtrigger' id='page-audio-play-on-load'></select>
                </div>
            </div>

            <!-- * Archive & Delete Buttons */ -->
            <hr>
            <div class='page-buttons d-flex flex-wrap justify-content-between'>
                <button class='archive btn'>Archive Page</button>
                <button class='delete btn btn-danger'>Delete Page</button>
            </div>
        </div>

    </div>
</script>`;

	d20plus.templates.templatePageSettings = templatePageSettings;
}

SCRIPT_EXTENSIONS.push(initTemplatePageSettings);
