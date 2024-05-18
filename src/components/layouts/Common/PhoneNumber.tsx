import { forwardRef } from 'react';

import { useTranslations } from 'next-intl';
import { PhoneInput } from 'react-international-phone';

import { cn } from '@/libs/cn';
import { allCountries } from '@/libs/countries';

import ErrorProvider from './ErrorProvider';

type Props = {
  setPhone: (phone: string) => void;
  phone: string;
  phoneError?: string;
};

const PhoneNumber = forwardRef<HTMLInputElement, Props>(
  ({ phone, setPhone, phoneError }: Props, ref) => {
    const t = useTranslations("contact_form");

    return (
      <div className="flex flex-col">
        <PhoneInput
          defaultCountry="us"
          placeholder={t("phone")}
          className={cn(
            "border-[1px] border-dark-400 flex pl-2 rounded-sm",
            phoneError && "border-danger-400"
          )}
          onChange={(newValue) => {
            setPhone(newValue);
          }}
          value={phone}
          countrySelectorStyleProps={{
            buttonStyle: {
              border: "none",
            },
            buttonContentWrapperStyle: {
              height: "max-content",
            },
            dropdownStyleProps: {
              style: {
                width: "max-content",
                right: "0",
                zIndex: 201,
              },
            },
            style: {
              width: "40px",
            },
          }}
          inputStyle={{
            padding: "20px 10px",
            width: "100%",
            borderRadius: "0",
            border: "none",
          }}
          countries={allCountries}
          inputProps={{
            dir: "ltr",
            name: "phone",
            // @ts-ignore
            ref: ref as React.MutableRefObject<HTMLInputElement>,
          }}
          inputRef={ref as React.MutableRefObject<HTMLInputElement>}
        />
        {phoneError && <ErrorProvider error={phoneError} />}
      </div>
    );
  }
);

PhoneNumber.displayName = "PhoneNumber";
export default PhoneNumber;
