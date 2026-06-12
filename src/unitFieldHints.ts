import * as vscode from 'vscode';

export interface UnitFieldValue {
    shortLabel: string;
    description: string;
}

/**
 * Maps comma-separated value index → hint for numeric fields only.
 * Derived from the header comments in export_descr_unit.txt.
 */
export const UNIT_FIELD_SCHEMAS: Record<string, Record<number, UnitFieldValue>> = {
    soldier: {
        1: { shortLabel: 'soldiers', description: 'Number of ordinary soldiers in the unit' },
        2: { shortLabel: 'extras', description: 'Attached extras (pigs, dogs, elephants, chariots, artillery, etc.)' },
        3: { shortLabel: 'mass', description: 'Collision mass of the men (1.0 = normal; infantry only)' },
    },
    stat_health: {
        0: { shortLabel: 'man HP', description: 'Hit points of the soldier' },
        1: { shortLabel: 'mount HP', description: 'Hit points of mount or attached animal (0 if none)' },
    },
    stat_pri: {
        0: { shortLabel: 'attack', description: 'Primary attack factor' },
        1: { shortLabel: 'charge', description: 'Attack bonus when charging' },
        3: { shortLabel: 'range', description: 'Missile range' },
        4: { shortLabel: 'ammo', description: 'Missile ammunition per man' },
        9: { shortLabel: 'delay', description: 'Minimum delay between attacks (in 1/10 second)' },
        10: { shortLabel: 'skeleton', description: 'Skeleton compensation factor in melee (should be 1)' },
    },
    stat_sec: {
        0: { shortLabel: 'attack', description: 'Secondary attack factor' },
        1: { shortLabel: 'charge', description: 'Secondary attack bonus when charging' },
        3: { shortLabel: 'range', description: 'Secondary missile range' },
        4: { shortLabel: 'ammo', description: 'Secondary missile ammunition per man' },
        9: { shortLabel: 'delay', description: 'Secondary attack delay (1/10 second)' },
        10: { shortLabel: 'skeleton', description: 'Secondary skeleton compensation factor' },
    },
    stat_ter: {
        0: { shortLabel: 'attack', description: 'Ternary attack factor' },
        1: { shortLabel: 'charge', description: 'Ternary attack bonus when charging' },
        3: { shortLabel: 'range', description: 'Ternary missile range' },
        4: { shortLabel: 'ammo', description: 'Ternary missile ammunition' },
        9: { shortLabel: 'delay', description: 'Ternary attack delay (1/10 second)' },
        10: { shortLabel: 'skeleton', description: 'Ternary skeleton compensation factor' },
    },
    stat_pri_ex: {
        0: { shortLabel: 'vs mounted atk', description: 'Attack bonus vs mounted units' },
        1: { shortLabel: 'vs mounted def', description: 'Defence bonus vs mounted units' },
        2: { shortLabel: 'penetration', description: 'Armour penetration' },
    },
    stat_sec_ex: {
        0: { shortLabel: 'vs mounted atk', description: 'Secondary attack bonus vs mounted units' },
        1: { shortLabel: 'vs mounted def', description: 'Secondary defence bonus vs mounted units' },
        2: { shortLabel: 'penetration', description: 'Secondary armour penetration' },
    },
    stat_ter_ex: {
        0: { shortLabel: 'vs mounted atk', description: 'Ternary attack bonus vs mounted units' },
        1: { shortLabel: 'vs mounted def', description: 'Ternary defence bonus vs mounted units' },
        2: { shortLabel: 'penetration', description: 'Ternary armour penetration' },
    },
    stat_pri_armour: {
        0: { shortLabel: 'armour', description: 'Armour factor' },
        1: { shortLabel: 'defence', description: 'Defensive skill factor (not used when shot at)' },
        2: { shortLabel: 'shield', description: 'Shield factor (attacks from front or left)' },
    },
    stat_sec_armour: {
        0: { shortLabel: 'armour', description: 'Mount/animal armour factor' },
        1: { shortLabel: 'defence', description: 'Mount/animal defensive skill factor' },
    },
    stat_armour_ex: {
        0: { shortLabel: 'armour', description: 'Base armour factor' },
        1: { shortLabel: 'armour ug1', description: 'Armour factor at upgrade level 1' },
        2: { shortLabel: 'armour ug2', description: 'Armour factor at upgrade level 2' },
        3: { shortLabel: 'armour ug3', description: 'Armour factor at upgrade level 3' },
        4: { shortLabel: 'defence', description: 'Defensive skill factor (not used when shot at)' },
        5: { shortLabel: 'shield melee', description: 'Shield factor vs melee' },
        6: { shortLabel: 'shield missile', description: 'Shield factor vs missiles' },
    },
    stat_heat: {
        0: { shortLabel: 'fatigue', description: 'Extra fatigue suffered in hot climates' },
    },
    stat_charge_dist: {
        0: { shortLabel: 'distance', description: 'Distance from the enemy that the unit begins charging' },
    },
    stat_fire_delay: {
        0: { shortLabel: 'delay', description: 'Extra delay between volleys (beyond animation delay)' },
    },
    stat_ground: {
        0: { shortLabel: 'scrub', description: 'Attack modifier on scrub (1:1 ratio)' },
        1: { shortLabel: 'sand', description: 'Attack modifier on sand' },
        2: { shortLabel: 'forest', description: 'Attack modifier in forest' },
        3: { shortLabel: 'snow', description: 'Attack modifier on snow' },
    },
    stat_mental: {
        0: { shortLabel: 'morale', description: 'Base morale level' },
    },
    stat_cost: {
        0: { shortLabel: 'turns', description: 'Number of turns to build/recruit' },
        1: { shortLabel: 'recruit', description: 'Campaign recruitment cost' },
        2: { shortLabel: 'upkeep', description: 'Campaign upkeep cost per turn' },
        3: { shortLabel: 'weapon ug', description: 'Cost of upgrading/retraining weapons' },
        4: { shortLabel: 'armour ug', description: 'Cost of upgrading/retraining armour' },
        5: { shortLabel: 'custom', description: 'Cost in custom battles' },
        6: { shortLabel: 'cb limit', description: 'Custom battle units allowed before cost increases' },
        7: { shortLabel: 'cb extra', description: 'Custom battle cost increase per unit over the limit' },
    },
    stat_food: {
        0: { shortLabel: 'unused', description: 'No longer used' },
        1: { shortLabel: 'unused', description: 'No longer used' },
    },
    formation: {
        0: { shortLabel: 'close side', description: 'Soldier spacing side-to-side in close formation (metres)' },
        1: { shortLabel: 'close front', description: 'Soldier spacing front-to-back in close formation (metres)' },
        2: { shortLabel: 'loose side', description: 'Soldier spacing side-to-side in loose formation (metres)' },
        3: { shortLabel: 'loose front', description: 'Soldier spacing front-to-back in loose formation (metres)' },
        4: { shortLabel: 'ranks', description: 'Default number of ranks' },
    },
};

interface ParsedValue {
    value: string;
    start: number;
    end: number;
}

function isNumericValue(value: string): boolean {
    return /^-?\d+(?:\.\d+)?$/.test(value);
}

function parseCommaSeparatedValues(text: string, startIndex: number): ParsedValue[] {
    const results: ParsedValue[] = [];
    let i = startIndex;

    while (i < text.length) {
        while (i < text.length && /\s/.test(text[i])) {
            i++;
        }
        if (i >= text.length || text[i] === ';') {
            break;
        }

        const valueStart = i;
        while (i < text.length && text[i] !== ',' && text[i] !== ';') {
            i++;
        }

        const raw = text.slice(valueStart, i).trim();
        if (raw.length > 0) {
            results.push({ value: raw, start: valueStart, end: i });
        }

        if (text[i] === ',') {
            i++;
        } else {
            break;
        }
    }

    return results;
}

function addFieldValueHints(
    text: string,
    lineNum: number,
    fieldName: string,
    schema: Record<number, UnitFieldValue>,
    hints: vscode.InlayHint[]
): void {
    const keywordMatch = text.match(new RegExp(`^\\s*${fieldName}\\s+`, 'i'));
    if (!keywordMatch) {
        return;
    }

    const values = parseCommaSeparatedValues(text, keywordMatch[0].length);
    for (let i = 0; i < values.length; i++) {
        const field = schema[i];
        if (!field || !isNumericValue(values[i].value)) {
            continue;
        }

        const hint = new vscode.InlayHint(
            new vscode.Position(lineNum, values[i].end),
            field.shortLabel,
            vscode.InlayHintKind.Parameter
        );
        hint.paddingLeft = true;
        hint.tooltip = new vscode.MarkdownString(`**${field.shortLabel}:** ${field.description}`);
        hints.push(hint);
    }
}

export function addUnitFileInlayHints(
    text: string,
    lineNum: number,
    hints: vscode.InlayHint[]
): void {
    const trimmed = text.trim();
    if (trimmed.startsWith(';') || trimmed.startsWith('¬')) {
        return;
    }

    const fieldMatch = trimmed.match(/^([a-z_][a-z0-9_]*)\s+/i);
    if (!fieldMatch) {
        return;
    }

    const fieldName = fieldMatch[1].toLowerCase();
    const schema = UNIT_FIELD_SCHEMAS[fieldName];
    if (schema) {
        addFieldValueHints(text, lineNum, fieldName, schema, hints);
    }
}

export function isUnitFile(document: vscode.TextDocument): boolean {
    return document.fileName.endsWith('export_descr_unit.txt');
}
