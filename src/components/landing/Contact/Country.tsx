import 'react-international-phone/style.css';

import React, { useMemo } from 'react';

import { useTranslations } from 'next-intl';
import {
  Controller,
  useFormContext,
} from 'react-hook-form';
import {
  defaultCountries,
  FlagImage,
  parseCountry,
} from 'react-international-phone';

import {
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';

export default function Country() {
  const formState = useFormContext();
  const t = useTranslations("contact_form");

  const countries = useMemo(() => {
    const parsedCountries = defaultCountries.map((c) => parseCountry(c));
    const uniqueCountries = Array.from(
      new Map(parsedCountries.map((c) => [c.name, c])).values()
    );
    return uniqueCountries;
  }, []);
  return (
    <Controller
      control={formState.control}
      name="country"
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          onSelectionChange={field.onChange}
          label={t("select_country")}
          variant="bordered"
          size="lg"
          isInvalid={!!error?.message}
          errorMessage={error?.message && t(error?.message)}
          labelPlacement="outside"
          radius="sm"
          defaultItems={countries.map((c) => c.name)}
        >
          {countries.map((country) => (
            <AutocompleteItem
              endContent={<FlagImage iso2={country.iso2} />}
              classNames={{
                base: "flex gap-3",
              }}
              key={country.name}
              value={country.name}
              startContent={
                <div className="w-[50px]">(+{country.dialCode})</div>
              }
            >
              {country.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      )}
    />
  );
}
