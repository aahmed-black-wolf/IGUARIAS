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
} from 'react-international-phone';

import {
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';

export default function Country() {
  const formState = useFormContext();
  const t = useTranslations("contact_form");

  console.log();

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
        >
          {defaultCountries.map((country) => (
            <AutocompleteItem
              endContent={<FlagImage iso2={country[1]} />}
              classNames={{
                base: "flex gap-3",
              }}
              key={country[1]}
              value={country[0]}
            >
              {country[0]}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      )}
    />
  );
}
