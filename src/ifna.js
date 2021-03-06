// Copyright 2015 JC Fisher

import error from './error';

// IFBLANK return the `value` if `#NA!`, otherwise it returns `value_if_na`.
export default function ifna(value, value_if_na) {
    return value === error.na ? value_if_na : value;
}
