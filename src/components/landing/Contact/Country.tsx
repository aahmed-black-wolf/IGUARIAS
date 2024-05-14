import 'react-international-phone/style.css';

import React from 'react';

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
  return (
    <Controller
      control={formState.control}
      name="country"
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onSelectionChange={field.onChange}
          label={t("select_country")}
          variant="bordered"
          size="lg"
          isInvalid={!!error?.message}
          errorMessage={error?.message}
          defaultItems={defaultCountries.map((c) => parseCountry(c).name)}
          labelPlacement="outside"
          radius="sm"
        >
          {defaultCountries.map((c) => {
            const country = parseCountry(c);
            return (
              <AutocompleteItem
                endContent={<FlagImage iso2={country.iso2} />}
                classNames={{
                  base: "flex gap-3",
                }}
                key={country.iso2}
                value={country.iso2}
                startContent={
                  <div className="w-[50px]">(+{country.dialCode})</div>
                }
              >
                {country.name}
              </AutocompleteItem>
            );
          })}
        </Autocomplete>
      )}
    />
  );
}
