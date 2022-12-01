export class Formatters {

    private static readonly LOCALE = navigator.languages && navigator.languages.length ?
        navigator.languages[0] :
        navigator.language;

    public static readonly POPULATION_FORMATTER = Intl.NumberFormat(Formatters.LOCALE, {notation: 'compact'});

    public static readonly PERCENTAGE_FORMATTER = Intl.NumberFormat(Formatters.LOCALE, {maximumFractionDigits: 2});

}