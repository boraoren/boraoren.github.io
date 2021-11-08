import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <span style={{position: "absolute", marginLeft: "3px", marginTop: "2px"}}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <Image
                    src={`/${locale}.svg`}
                    alt={`Flag of ${locale}`}
                    width={20}
                    height={20}
                  />
              </Link>
              </span>
          );
        })}
    </>
  );
}
