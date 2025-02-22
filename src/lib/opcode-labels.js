import {defineMessages} from 'react-intl';

const messages = defineMessages({
    motion_direction: {
        defaultMessage: 'direction',
        description: 'Label for the direction monitor when shown on the stage',
        id: 'gui.opcodeLabels.direction'
    },
    motion_xposition: {
        defaultMessage: 'x position',
        description: 'Label for the x position monitor when shown on the stage',
        id: 'gui.opcodeLabels.xposition'
    },
    motion_yposition: {
        defaultMessage: 'y position',
        description: 'Label for the y position monitor when shown on the stage',
        id: 'gui.opcodeLabels.yposition'
    },
    motion_rotationstyle: {
        defaultMessage: 'rotation style',
        description: 'Label for the rotation style monitor when shown on the stage',
        id: 'gui.opcodeLabels.rotationstyle'
    },

    // Looks
    looks_size: {
        defaultMessage: 'size',
        description: 'Label for the size monitor when shown on the stage',
        id: 'gui.opcodeLabels.size'
    },
    looks_costumename: {
        defaultMessage: 'costume name',
        description: 'Label for the costume name monitor when shown on the stage',
        id: 'gui.opcodeLabels.costumename'
    },
    looks_costumenumber: {
        defaultMessage: 'costume number',
        description: 'Label for the costume number monitor when shown on the stage',
        id: 'gui.opcodeLabels.costumenumber'
    },
    looks_backdropname: {
        defaultMessage: 'backdrop name',
        description: 'Label for the backdrop name monitor when shown on the stage',
        id: 'gui.opcodeLabels.backdropname'
    },
    looks_backdropnumber: {
        defaultMessage: 'backdrop number',
        description: 'Label for the backdrop number monitor when shown on the stage',
        id: 'gui.opcodeLabels.backdropnumber'
    },
    looks_effectcolor: {
        defaultMessage: 'color',
        description: 'Label for the color effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectcolor'
    },
    looks_effectfisheye: {
        defaultMessage: 'fisheye',
        description: 'Label for the fisheye effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectfisheye'
    },
    looks_effectwhirl: {
        defaultMessage: 'whirl',
        description: 'Label for the whirl effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectwhirl'
    },
    looks_effectpixelate: {
        defaultMessage: 'pixelate',
        description: 'Label for the pixelate effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectpixelate'
    },
    looks_effectmosaic: {
        defaultMessage: 'mosaic',
        description: 'Label for the mosaic effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectmosaic'
    },
    looks_effectbrightness: {
        defaultMessage: 'brightness',
        description: 'Label for the brightness effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectbrightness'
    },
    looks_effectghost: {
        defaultMessage: 'ghost',
        description: 'Label for the ghost effect monitor when shown on the stage',
        id: 'gui.opcodeLabels.effectghost'
    },


    // Sound
    sound_volume: {
        defaultMessage: 'volume',
        description: 'Label for the volume monitor when shown on the stage',
        id: 'gui.opcodeLabels.volume'
    },
    sound_tempo: {
        defaultMessage: 'tempo',
        description: 'Label for the tempo monitor when shown on the stage',
        id: 'gui.opcodeLabels.tempo'
    },

    // Sensing
    sensing_answer: {
        defaultMessage: 'answer',
        description: 'Label for the answer monitor when shown on the stage',
        id: 'gui.opcodeLabels.answer'
    },
    sensing_mousedown: {
        defaultMessage: 'mouse down?',
        description: 'Label for the mouse down monitor when show on the stage',
        id: 'tw.opcode.mousedown'
    },
    sensing_mousex: {
        defaultMessage: 'mouse x',
        description: 'Label for the mouse x monitor when show on the stage',
        id: 'tw.opcode.mousex'
    },
    sensing_mousey: {
        defaultMessage: 'mouse y',
        description: 'Label for the mouse y monitor when show on the stage',
        id: 'tw.opcode.mousey'
    },
    sensing_loudness: {
        defaultMessage: 'loudness',
        description: 'Label for the loudness monitor when shown on the stage',
        id: 'gui.opcodeLabels.loudness'
    },
    sensing_username: {
        defaultMessage: 'username',
        description: 'Label for the username monitor when shown on the stage',
        id: 'gui.opcodeLabels.username'
    },
    sensing_current_year: {
        defaultMessage: 'year',
        description: 'Label for the current year monitor when shown on the stage',
        id: 'gui.opcodeLabels.year'
    },
    sensing_current_month: {
        defaultMessage: 'month',
        description: 'Label for the current month monitor when shown on the stage.',
        id: 'gui.opcodeLabels.month'
    },
    sensing_current_date: {
        defaultMessage: 'date',
        description: 'Label for the current date monitor when shown on the stage. Shows the current day of the month',
        id: 'gui.opcodeLabels.date'
    },
    sensing_current_dayofweek: {
        defaultMessage: 'day of week',
        description: 'Label for the current day of week monitor when shown on the stage',
        id: 'gui.opcodeLabels.dayofweek'
    },
    sensing_current_hour: {
        defaultMessage: 'hour',
        description: 'Label for the current hour monitor when shown on the stage',
        id: 'gui.opcodeLabels.hour'
    },
    sensing_current_minute: {
        defaultMessage: 'minute',
        description: 'Label for the current minute monitor when shown on the stage',
        id: 'gui.opcodeLabels.minute'
    },
    sensing_current_second: {
        defaultMessage: 'second',
        description: 'Label for the current second monitor when shown on the stage',
        id: 'gui.opcodeLabels.second'
    },
    sensing_timer: {
        defaultMessage: 'timer',
        description: 'Label for the timer monitor when shown on the stage',
        id: 'gui.opcodeLabels.timer'
    },
    sensing_dayssince2000: {
        defaultMessage: 'days since 2000',
        description: 'Label for the days since 2000 monitor when show on the stage',
        id: 'tw.opcode.2000'
    },

    // Camera
    camera_xposition: {
        defaultMessage: 'camera x',
        description: 'Label for the camera x position monitor when shown on the stage',
        id: 'gui.opcodeLabels.camerax'
    },
    camera_yposition: {
        defaultMessage: 'camera y',
        description: 'Label for the camera y position monitor when shown on the stage',
        id: 'gui.opcodeLabels.cameray'
    },
});

class OpcodeLabels {
    constructor () {
        /**
         * Translation function for labels. By default just return the defaultMessage
         * @private
         * @param {object} message A message object compatible with react-intl formatMessage
         * @return {string} Return the default string initially
         */
        this._translator = message => message.defaultMessage;

        /**
         * Initial opcode map, with categories defined
         * @private
         */
        this._opcodeMap = {
            // Motion
            motion_direction: {category: 'motion'},
            motion_xposition: {category: 'motion'},
            motion_yposition: {category: 'motion'},
            motion_rotationstyle: {category: 'motion'},

            // Looks
            looks_size: {category: 'looks'},
            looks_costumenumbername: {category: 'looks'},
            looks_backdropnumbername: {category: 'looks'},
            looks_backdropname: {category: 'looks'},
            looks_effect: {category: 'looks'},

            // Data
            data_variable: {category: 'data'},
            data_listcontents: {category: 'list'},

            // Sound
            sound_volume: {category: 'sound'},
            sound_tempo: {category: 'sound'},

            // Sensing
            sensing_answer: {category: 'sensing'},
            sensing_mousedown: {category: 'sensing'},
            sensing_mousex: {category: 'sensing'},
            sensing_mousey: {category: 'sensing'},
            sensing_loudness: {category: 'sensing'},
            sensing_username: {category: 'sensing'},
            sensing_current: {category: 'sensing'},
            sensing_timer: {category: 'sensing'},
            sensing_dayssince2000: {category: 'sensing'},

            // Camera
            camera_xposition: {category: 'camera'},
            camera_yposition: {category: 'camera'}
        };

        // Initialize opcodeMap with default strings
        this._refreshOpcodeMap();
    }

    /**
     * Set the translation function for monitor labels. The function should accept
     * a message object as defined by react-intl defineMessages
     * @param {function} translator the function to use for localization
     */
    setTranslatorFunction (translator) {
        this._translator = translator;
        this._refreshOpcodeMap();
    }

    /**
     * Internal function to update opcode Map when translation function is defined
     * @private
     */
    _refreshOpcodeMap () {
        // Motion
        this._opcodeMap.motion_direction.labelFn = () => this._translator(messages.motion_direction);
        this._opcodeMap.motion_xposition.labelFn = () => this._translator(messages.motion_xposition);
        this._opcodeMap.motion_yposition.labelFn = () => this._translator(messages.motion_yposition);
        this._opcodeMap.motion_rotationstyle.labelFn = () => this._translator(messages.motion_rotationstyle);

        // Looks
        this._opcodeMap.looks_size.labelFn = () => this._translator(messages.looks_size);
        this._opcodeMap.looks_costumenumbername.labelFn = params => {
            if (params.NUMBER_NAME === 'number') {
                return this._translator(messages.looks_costumenumber);
            }
            return this._translator(messages.looks_costumename);
        };
        this._opcodeMap.looks_backdropnumbername.labelFn = params => {
            if (params.NUMBER_NAME === 'number') {
                return this._translator(messages.looks_backdropnumber);
            }
            return this._translator(messages.looks_backdropname);
        };
        this._opcodeMap.looks_backdropname.labelFn = () => this._translator(messages.looks_backdropname);
        this._opcodeMap.looks_effect.labelFn = params => {
            switch (params.EFFECT.toLowerCase()) {
            case 'color':
                return this._translator(messages.looks_effectcolor);
            case 'fisheye':
                return this._translator(messages.looks_effectfisheye);
            case 'whirl':
                return this._translator(messages.looks_effectwhirl);
            case 'pixelate':
                return this._translator(messages.looks_effectpixelate);
            case 'mosaic':
                return this._translator(messages.looks_effectmosaic);
            case 'brightness':
                return this._translator(messages.looks_effectbrightness);
            case 'ghost':
                return this._translator(messages.looks_effectghost);
            }
        };

        // Data
        this._opcodeMap.data_variable.labelFn = params => params.VARIABLE;
        this._opcodeMap.data_listcontents.labelFn = params => params.LIST;

        // Sound
        this._opcodeMap.sound_volume.labelFn = () => this._translator(messages.sound_volume);
        this._opcodeMap.sound_tempo.labelFn = () => this._translator(messages.sound_tempo);

        // Sensing
        this._opcodeMap.sensing_answer.labelFn = () => this._translator(messages.sensing_answer);
        this._opcodeMap.sensing_mousedown.labelFn = () => this._translator(messages.sensing_mousedown);
        this._opcodeMap.sensing_mousex.labelFn = () => this._translator(messages.sensing_mousex);
        this._opcodeMap.sensing_mousey.labelFn = () => this._translator(messages.sensing_mousey);
        this._opcodeMap.sensing_loudness.labelFn = () => this._translator(messages.sensing_loudness);
        this._opcodeMap.sensing_username.labelFn = () => this._translator(messages.sensing_username);
        this._opcodeMap.sensing_current.labelFn = params => {
            switch (params.CURRENTMENU.toLowerCase()) {
            case 'year':
                return this._translator(messages.sensing_current_year);
            case 'month':
                return this._translator(messages.sensing_current_month);
            case 'date':
                return this._translator(messages.sensing_current_date);
            case 'dayofweek':
                return this._translator(messages.sensing_current_dayofweek);
            case 'hour':
                return this._translator(messages.sensing_current_hour);
            case 'minute':
                return this._translator(messages.sensing_current_minute);
            case 'second':
                return this._translator(messages.sensing_current_second);
            }
        };
        this._opcodeMap.sensing_timer.labelFn = () => this._translator(messages.sensing_timer);
        this._opcodeMap.sensing_dayssince2000.labelFn = () => this._translator(messages.sensing_dayssince2000);

        // Camera
        this._opcodeMap.camera_xposition.labelFn = () => this._translator(messages.camera_xposition);
        this._opcodeMap.camera_yposition.labelFn = () => this._translator(messages.camera_yposition);
    }

    /**
     * Return the label for an opcode
     * @param {string} opcode the opcode you want a label for
     * @return {object} object with  label and category
     */
    getLabel (opcode) {
        if (opcode in this._opcodeMap) return this._opcodeMap[opcode];
        return {
            category: 'extension',
            label: opcode
        };
    }
}

export default new OpcodeLabels();
