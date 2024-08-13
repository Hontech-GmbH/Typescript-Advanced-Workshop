/**
 * Modify the type TranslationKey so that every TranslationKeyId can be suffixed with either de or en.
 * e.g. welcome_title_de or welcome_title_en
 */

type TranslationKeyId = 'welcome_title' | 'welcome_text' | 'info_text' | 'info_hint';

type TranslationKey = TranslationKeyId;

// Should Work
const germanTranslationKey: TranslationKey = 'info_hint_de';
const englishTranslationKey: TranslationKey = 'info_hint_en';

// Should NOT work
const errorTranslationKey: TranslationKey = 'info_hint_error'

export {}
