#!/bin/bash

die () {
    echo >&2 "$@"
    exit 1
}

SRC=$1
DEST=$2

#TMP_DIR=~/temp
#CHANGELOG=$TMP_DIR/CHANGELOG.md
CHANGELOG=CHANGELOG.md

#if [ ! -d "$TMP_DIR" ]; then
 #   mkdir $TMP_DIR
#fi

# Make sure we have the branches and the latest code from them.
git checkout ${SRC} || die "Cant checkout ${SRC}"
git pull || die "Cant pull ${SRC}"
git checkout ${DEST} || die "Cant checkout ${DEST}"
git pull || die "Cant pull ${DEST}"

echo > ${CHANGELOG}
echo "Changelog Summary" >> ${CHANGELOG}
echo "==================================" >> ${CHANGELOG}
echo >> ${CHANGELOG}

echo "Defects" >> ${CHANGELOG}
echo "==================================" >> ${CHANGELOG}
git log --no-merges --oneline ${SRC}..${DEST} | cut -c11- | grep "^DE" | uniq | sort >> ${CHANGELOG}

echo >> ${CHANGELOG}

echo "User Stories" >> ${CHANGELOG}
echo "==================================" >> ${CHANGELOG}
git log --no-merges --oneline ${SRC}..${DEST} | cut -c11- | grep "^US" | uniq | sort >> ${CHANGELOG}

echo >> ${CHANGELOG}
echo "Changelog Details" >> ${CHANGELOG}
echo "==================================" >> ${CHANGELOG}
echo >> ${CHANGELOG}

git log --no-merges ${SRC}..${DEST} >> ${CHANGELOG}
echo >> ${CHANGELOG}

cat ${CHANGELOG}

exit 0
